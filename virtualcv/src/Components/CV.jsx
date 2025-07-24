export default function CV() {
  return (
    <div class="flex md:flex-row flex-col max-w-4xl mx-auto px-4 ">
      <div class="flex-1  m-5 rounded-md px-5 pb-5 bg-[#b9d7ea]">
        <h3 class="text-2xl font-bold t ext-center"> Skills </h3>
        <ul class="list-disc pl-5">
          <li>
            Programming in Python, C#, C/C++ and Java
            <li>Leadership</li>
            <li>Tutoring</li>
            <li>Communication</li>
          </li>
        </ul>
      </div>
      <div class="flex-1 m-5 rounded-md px-5 pb-5 bg-[#b9d7ea]">
        <h3 class="text-2xl font-bold text-center"> Experience </h3>
        <p class="font-semibold">Student Assistant – Programming Support </p>

        <div class="space-y-4">
          <p> 2024-2025</p>

          <p>
            Provided one-on-one and group support during practical sessions by
            explaining programming concepts and debugging code for Python and
            C#.
          </p>

          <p>
            Assisted lecturers in marking practical assignments and tests,
            ensuring consistency and accuracy in assessment.
          </p>
        </div>
      </div>
    </div>
  );
}
