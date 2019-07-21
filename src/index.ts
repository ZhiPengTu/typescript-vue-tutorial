import Vue from "vue";
import HelloComponent from "./components/Hello.vue";


let testArr = [{ name: "xiaoming", age: 23 }, { name: "xiaophong", age: 18 }];
let newArr =testArr.map((item,index)=>{
    return{
        name:item.name,
        age:item.age
    }
})
//log 
// newArr === testArr
let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});
