var roles = new Map([
   ['r1', 'User'],
   ['r2', 'Guest'],
   ['r3', 'Admin'],
]);
console.log(roles.get("r2"))

for(let r of roles.entries())
console.log(`${r[0]}: ${r[1]}`);
