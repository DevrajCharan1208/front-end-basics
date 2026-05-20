class Animal{
    void eat(){
        System.out.println("eating...");
    }
}

class Dog extends Animal{
    void bark(){
        System.out.println("barking...");
    }
}

class Cat extends Animal{
    void meow(){
        System.err.println("meowing...");
    }
}

class Hierarchical_Inheritance{
    public static void main(String args[]){
        Dog d = new Dog();
        d.bark();
        d.eat();

        Cat c = new Cat();
        c.meow();
        c.eat();

}
}
