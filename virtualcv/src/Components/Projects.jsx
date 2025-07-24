export default function Projects() {
  return (
    <div class="bg-[#d6e6f2]  p-1 pb-4 rounded-md mb-7">
      <h1 class="text-4xl font-bold text-center pb-5 mt-3"> Projects</h1>
      <div class="flex md:flex-row flex-col max-w-5xl mx-auto px-4 ">
        <div class="flex-1 border-1 m-2 rounded-md  pt-2 px-5 pb-5 bg-[#b9d7ea] border-[#34495e]">
          <p class="font-semibold"> Messaging app </p>

          <div class="space-y-4">
            <p> CMPG 315 - Computer Networks </p>

            <p>
              As part of a networking project, I developed a real-time messaging
              application that focused on implementing client-server
              communication using fundamental network protocols. The application
              enabled multiple clients to connect, send, and receive messages
              through a central server, simulating real-world communication
              systems.
            </p>

            <p>
              I focused on developing the GUI using Tkinter, which enhanced my
              understanding of front-end design principles and user interaction
              within desktop applications.{" "}
            </p>

            <button class="text-[#FAF9F6]">
              <a
                href="https://github.com/ZankeFerreira/CMPG315_GroupProject-Texting-App"
                target="_blank"
              >
                View Github
              </a>
            </button>
          </div>
        </div>

        <div class="flex-1 border-1 m-2 rounded-md  pt-2 px-5 pb-5 bg-[#b9d7ea] border-[#34495e]">
          <p class="font-semibold"> Business Operations Simulation </p>

          <div class="space-y-4">
            <p> CMPG 213 - Systems Analysis and Design </p>

            <p>
              I led a business operations simulation project, where I worked on
              modeling and managing core systems such as inventory, sales, and
              reporting using SQL and C#. This involved designing relational
              databases to manage scheduling, client registrations, and
              performance reporting.
            </p>

            <p>
              The project provided hands-on experience in database
              normalization, query optimization, and building user-friendly
              interfaces for data interaction.
            </p>

            <button class="text-[#FAF9F6]">
              <a
                href="https://github.com/ZankeFerreira/CMPG213_Project"
                target="_blank"
              >
                View Github
              </a>
            </button>
          </div>
        </div>

        {/* <div class="flex-1 border-1 m-2 rounded-md  pt-2 px-5 pb-5 bg-[#cce1f1] border-[#34495e]">
        <p class="font-semibold"> Business Operation Development </p>

        <div class="space-y-4">
          <p> CMPG 311 - Databases</p>

          <p>
            As part of an enterprise system development project, I worked on
            simulating end-to-end business processes using an Oracle Database.
            This involved designing and implementing database structures to
            support core operations such as customer management, inventory
            control, order processing, and reporting.
          </p>

          <p>
             The project provided
            hands-on experience with SQL and data modeling, while
            deepening my understanding of how enterprise-level systems support
            complex workflows and ensure data integrity across various business
            functions.
          </p>

          <button class="font">
            <a
              href="https://github.com/ZankeFerreira/CMPG213_Project"
              target="_blank"
            >
              View Github
            </a>
          </button>
        </div>
      </div> */}
      </div>
    </div>
  );
}
