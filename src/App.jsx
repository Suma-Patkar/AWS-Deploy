import './App.css';

function App() {
  return (
    <div className="container my-5 px-4 py-5 border rounded shadow" style={{ backgroundColor: '#f0f4ff' }}>
      {/* Profile Header */}
      <div className="text-center mb-4">
        <img
          src="/profile.jpg"
          alt="Suma Patkar"
          className="rounded-circle shadow"
          style={{ width: '150px', height: '150px', objectFit: 'cover', border: '4px solid #0d6efd' }}
        />
        <h1 className="mt-3" style={{ color: '#0d6efd' }}>Suma Patkar</h1>
        <p><strong>Email:</strong> sumapatkar662@gmail.com | <strong>Phone:</strong> +91 8431513423</p>
      </div>

      {/* Objective */}
      <section className="mb-5">
        <h3 className="text-secondary border-bottom pb-2">Objective</h3>
        <p>
          A hardworking Electronics and Communication Engineer looking for a job where I can use my knowledge and skills.
          I am committed to learning, working sincerely, and giving my best to achieve good results.
        </p>
      </section>

      {/* Education */}
      <section className="mb-5">
        <h3 className="text-secondary border-bottom pb-2">Education</h3>
        <p><strong>NMAM Institute of Technology, Nitte</strong></p>
        <p>B.Tech in Electronics and Communication Engineering</p>
        <p>CGPA: 8.34 (Till 5th Sem) | 2022 – 2026</p>
      </section>

      {/* Skills */}
      <section className="mb-5">
        <h3 className="text-secondary border-bottom pb-2">Skills</h3>
        <p><strong>Design:</strong> Circuit design, VLSI designing, System Verilog, Simulink, PCB design</p>
        <p><strong>Tools:</strong> Arduino IDE, KiCad, Cadence, Xilinx, VS Code</p>
        <p><strong>Languages:</strong> C, Java, System Verilog</p>
        <p><strong>Soft Skills:</strong> Time Management, Teamwork, Quick learner</p>
      </section>

      {/* Projects */}
      <section className="mb-5">
        <h3 className="text-secondary border-bottom pb-2">Projects</h3>
        <div className="mb-3">
          <h5 className="text-dark">Speed Limit Alert System</h5>
          <p>Alerts drivers when they exceed speed limits using GPS & wireless tech. Sends alerts to authorities.</p>
        </div>
        <div className="mb-3">
          <h5 className="text-dark">Solar Power Generation (Simulink)</h5>
          <p>Simulated PV + MPPT + battery systems for smart energy at home, optimized for variable conditions.</p>
        </div>
        <div>
          <h5 className="text-dark">Accident Detection & Emergency Response</h5>
          <p>Uses sensors and controllers to detect accidents and auto-alert emergency services.</p>
        </div>
      </section>

      {/* Internships */}
      <section>
        <h3 className="text-secondary border-bottom pb-2">Internships</h3>
        <div className="mb-3">
          <h5 className="text-dark">Experimind Labs – June–July 2024</h5>
          <p>Worked on IoT systems using Arduino, focused on debugging, testing, and collaborative dev work.</p>
        </div>
        <div>
          <h5 className="text-dark">Tinker Space – June–July 2025</h5>
          <p>Created a Self-Balancing Robot with Raspberry Pi. Learned soldering, electronics, and control logic.</p>
        </div>
      </section>
    </div>
  );
}

export default App;