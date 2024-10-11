import Cryptr from "cryptr";

const Cryptrobj = new Cryptr("1234");
const text =
  "668e9bdcaddc064fc9526b7ca244be516a73ec10de304d0a6ef852b91e7ae89867c3aba07d1e3c640d97c31468ec1049d8ba5009fe6c23649b61117bdd1c40f89b11c72488a59c1431ac8943f690d27bf601d23fa5404a958fff3e5e0cdfe997b940d1";
console.log(Cryptrobj.decrypt(text));
