export default function Header() {
  return (
    <div class=" text-center bg-[#d6e6f2]  top-0 left-0 w-full z-50 pt-8 pb-4">
      <h1 class="text-5xl">Zanke Ferreira</h1>

      <p class=" text-3xl m-2">Junior developer</p>

      <div class="flex pt-2 max-w-4xl mx-auto px-4  text-[#34495e]  md:flex-row flex-col  gap-y-2 md:gap-x-4 items-center">
        <div class="flex-1 bg-[#b9d7ea] rounded-md   mx-2 w-fit p-2">
          zanke.ferreira1229@gmail.com{" "}
        </div>
        <div class="flex-1 underline bg-[#b9d7ea] rounded-md mx-10 w-fit p-2">
          <a
            href="https://linkedin.com/in/zanke-ferreira-6a7354362/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
        </div>
        <div class="flex-1 underline bg-[#b9d7ea] rounded-md  mx-10 w-fit p-2 ">
          <a href="https://github.com/ZankeFerreira" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
