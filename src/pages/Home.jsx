export default function Home() {
  return (
    <div className="container">
      <h1>🎓 Welcome to Student Admission Portal</h1>
      <p>Begin your journey with our college. Apply easily and track your admission.</p>

      {/* Hero Image */}
      <div style={{ marginTop: "20px" }}>
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
          alt="college"
          style={{ width: "100%", maxHeight: "350px", objectFit: "cover", borderRadius: "10px" }}
        />
      </div>

      {/* Features Section */}
      <div style={{ marginTop: "40px" }}>
        <h2>Why Choose Our College?</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px"
        }}>
          
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" width="80" />
            <h3>Expert Faculty</h3>
            <p>Learn from experienced professors and industry experts.</p>
          </div>

          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" width="80" />
            <h3>Modern Labs</h3>
            <p>Access cutting-edge labs and infrastructure.</p>
          </div>

          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" width="80" />
            <h3>Placements</h3>
            <p>Top companies recruit our students every year.</p>
          </div>

        </div>
      </div>

      {/* Courses Section */}
      <div style={{ marginTop: "50px" }}>
        <h2>Courses Offered</h2>
        <ul style={{ textAlign: "left", maxWidth: "400px", margin: "auto" }}>
          <li>Computer Science Engineering (CSE)</li>
          <li>Electronics & Communication (ECE)</li>
          <li>Electrical & Electronics (EEE)</li>
          <li>Mechanical Engineering (MECH)</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div style={{ marginTop: "40px" }}>
        <h2>Start Your Admission Today 🚀</h2>
        <p>Click on Register to fill your application form.</p>
      </div>
    </div>
  )
}