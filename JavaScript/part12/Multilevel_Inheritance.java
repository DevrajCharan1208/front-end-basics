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

class Multilevel_Inheritance{
    public static void main(String args[]){
        Breed b = new Breed();
        b.bark();
        b.eat();
        b.sniff();
    }
}

