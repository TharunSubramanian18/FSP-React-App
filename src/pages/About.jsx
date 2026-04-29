import mepcoImg from "../assets/Mepco.jpg";
export default function About() {
  return (
    <div className="container">
      <h1>🏫 About Our College</h1>

      {/* College Image */}
      <div style={{ marginTop: "20px" }}>
        <img
          src={mepcoImg}
          alt="college campus"
          style={{
            width: "100%",
            maxHeight: "350px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* Intro */}
      <div style={{ marginTop: "30px" }}>
        <h2>Mepco Schlenk Engineering College</h2>
        <p>
          Mepco Schlenk Engineering College is one of the premier institutions
          known for academic excellence, innovation, and discipline. We focus on
          shaping future engineers with strong technical knowledge and ethical values.
        </p>
      </div>

      {/* Vision & Mission */}
      <div style={{ marginTop: "40px", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        
        <div className="card">
          <h3>🎯 Our Vision</h3>
          <p>
            To become a center of excellence in engineering education,
            producing globally competent professionals.
          </p>
        </div>

        <div className="card">
          <h3>🚀 Our Mission</h3>
          <p>
            To provide quality education, foster innovation, and develop
            leadership skills among students.
          </p>
        </div>

      </div>

      {/* Facilities */}
      <div style={{ marginTop: "50px" }}>
        <h2>🏢 Facilities</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px"
        }}>
          
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" width="70" />
            <h3>Experienced Faculty</h3>
            <p>Highly qualified professors guiding students.</p>
          </div>

          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" width="70" />
            <h3>Advanced Labs</h3>
            <p>Modern labs for practical learning.</p>
          </div>

          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="70" />
            <h3>Library</h3>
            <p>Well-stocked library with digital resources.</p>
          </div>

          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" width="70" />
            <h3>Placements</h3>
            <p>Excellent placement support with top recruiters.</p>
          </div>

        </div>
      </div>

      {/* Closing */}
      <div style={{ marginTop: "50px" }}>
        <h2>🌟 Why Choose Us?</h2>
        <p>
          We provide quality education to make our students excel in their domain,
          with a perfect blend of academics, practical exposure, and career opportunities.
        </p>
      </div>
    </div>
  )
}