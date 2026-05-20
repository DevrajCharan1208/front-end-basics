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

class Breed extends Dog{
    void sniff(){
        System.err.println("Sniffing...");
    }
}

class Single_Inheritance{
    public static void main(String args[]){
        Dog d = new Dog();
        d.bark();
        d.eat();
    }
}

