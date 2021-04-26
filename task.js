var a, b, c;
a=20;
b=35;
c=a+b;
console.log('c=', c);

var User = { name: 'Temo', age: 26, numbers : ['+995123321312', '+9951231241'], isActive: false };
console.log ('teleponis nomrebi', User.numbers );
var winadadeba =User.name+' aris '+ User.age+' wlis ';
console.log(winadadeba)

var arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
        console.log(arr[i] + ' >=5asoze');
    }
}

var users = [ { username: 'test', status: false, }, { username: 'test2', status: false, }, { username: 'test3', status: true, } ];
for (var i = 0; i < users.length; i++){
    // console.log(users[i]);
    // console.log(users[i].status);
    if(users[i].status){
        console.log(users[i]);
    }
}

var arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
// console.log(arr.flat());
var numbers=arr.flat();
// console.log(numbers)
for (var i = 0; i < numbers.length; i++) {
    if(numbers[i]>0){
        console.log(numbers[i])
    }
}   