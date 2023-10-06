const targetObject = {
  name: 'Ryan',
  age: 23,
};

const objectProxy = new Proxy(targetObject, {
  get: function (target, property) {
    console.log(`Mengakses properti "${property}"`);
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Mengubah properti "${property}" menjadi "${value}"`);
    target[property] = value;
  },
});

// Mengakses properti objek melalui proxy
console.log(objectProxy.name); // Ini akan mencetak log akses properti "name"
console.log(objectProxy.age);  // Ini akan mencetak log akses properti "age"

objectProxy.name = 'Riska';
objectProxy.age = 21;

console.log(objectProxy.name);
console.log(objectProxy.age);