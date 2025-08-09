import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Papa from "papaparse";
import { saveAs } from "file-saver";

const EnrollmentsList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Admin password
  const correctPassword = "Torres348$";

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  // Live fetch from Firebase
  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(
      collection(db, "enrollments"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEnrollments(data);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  // Export to CSV
  const exportToCSV = () => {
    const csv = Papa.unparse(
      enrollments.map((e) => ({
        Name: e.name,
        Email: e.email,
        Number: e.number,
        Address: e.address,
        Message: e.message,
        Source: e.source,
        Timestamp: e.timestamp?.toDate
          ? e.timestamp.toDate().toLocaleString()
          : "",
      }))
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "enrollments.csv");
  };

  // Show login if not authenticated
  if (!isAuthenticated) {
    return (
      <div
        style={{
          padding: "20px",
          margin: "8rem auto",
          width: "20%",
          display: "flex",
          flexDirection: "column",
          gap: "2em",
          alignItems: "center",
          minWidth: "300px",
        }}
      >
        <h2>Admin Login</h2>
        <input
          style={{ width: "100%" }}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          style={{ padding: "0.5em", fontSize: "1em", width: "100%" }}
        >
          Login
        </button>
      </div>
    );
  }

  // Show enrollment table
  return (
    <div
      style={{
        padding: "20px",
        margin: "8rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        maxWidth: "900px",
      }}
    >
      <h2>All Enrollments</h2>
      <button onClick={exportToCSV} style={{ marginBottom: "10px" }}>
        Export to CSV
      </button>

      <table
        border="1"
        cellPadding="5"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Message</th>
            <th>Source</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enroll) => (
            <tr key={enroll.id}>
              <td>{enroll.name}</td>
              <td>{enroll.email}</td>
              <td>{enroll.number}</td>
              <td>{enroll.address}</td>
              <td>{enroll.message}</td>
              <td>{enroll.source}</td>
              <td>
                {enroll.timestamp?.toDate
                  ? enroll.timestamp.toDate().toLocaleString()
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentsList;
