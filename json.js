//1. OBJ to JSON
//stringify(obj)

let json = JSON.stringify(true);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
//    symbol: symbol('id'), //javascrip에 있는 고유 함수나 jump같은 함수는
    jump: () => {          //string로 변환되지 않음.
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit,['name','color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key = ${key}..value = ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

//JSON to Object
//parse(json)
console.clear();
//json 화일을 obj로 재 전환할 경우 기존 function은 json 전환시 사라지므로
//obj 전환할 경우에는 복구되지 않는다.
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {     //reviver parameter
    console.log(`key = ${key}..value = ${value}`);  
    return key === 'birthDate' ? new Date() : value; //key가 'birthday'이면 new Date() ,아니면 value
});
console.log(obj);       
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

//유용한 사이트 (youtube 뒤에서 확인)
//JSON Diff  =>  

