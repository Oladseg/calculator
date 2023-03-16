// const text =
//   "Deserunt qui veniam deserunt fugiat. Cillum sit sit irure id. Elit quis ullamco deserunt ut aute. Quis Lorem commodo elit esse nisi anim pariatur id sint irure tempor sunt quis. Eu veniam ex irure est. Ullamco commodo excepteur et tempor.Ipsum excepteur ullamco adipisicing sit. Velit laboris minim sint sit est ad duis nisi voluptate labore consequat eu ad irure. Officia consequat non nostrud magna ad irure. Culpa cupidatat elit nostrud pariatur eiusmod elit dolor nostrud nulla nisi. Adipisicing id commodo officia anim occaecat officia dolor occaecat laboris ut occaecat.Aliquip et deserunt enim voluptate aute fugiat officia. Irure Lorem irure et ullamco minim aute dolore voluptate. Commodo consectetur deserunt fugiat mollit deserunt irure ad labore. Elit occaecat id duis sint laborum consequat duis consectetur veniam. Enim amet pariatur esse ex amet excepteur aliquip occaecat ipsum esse. Minim anim eiusmod tempor esse irure ipsum dolore consequat.Excepteur non commodo est enim exercitation veniam commodo ullamco elit. Id Lorem culpa incididunt aliqua reprehenderit proident ut ex proident sunt dolore et commodo proident. Velit nisi est reprehenderit nisi eiusmod fugiat non nulla excepteur deserunt aute. Lorem ea amet nulla laboris deserunt consequat est veniam deserunt esse id laboris sunt.Qui in irure amet aliquip magna commodo elit id sint fugiat laborum duis esse. Non proident officia officia consequat. Elit ex Lorem laboris labore. Nisi duis qui dolor est.Quis adipisicing incididunt officia nostrud ea ea eiusmod laboris nisi aliquip esse amet dolore ullamco. Minim proident magna occaecat aliquip consectetur excepteur velit esse enim minim. Officia sit fugiat consectetur qui dolore nisi ipsum. Dolor sunt amet labore elit amet nulla minim.";

//   const matching = text.match(/sit/g);
//   console.log(matching.length);

const cars = ["Toyota", "Benz", "Tesla", "Nisan", "VolksW"];
const el = document.getElementById("text");
let item = "<select>";
for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  item += `<option> ${element}</option>`;
}
item += "</select>";
el.innerHTML = item;
// console.log();