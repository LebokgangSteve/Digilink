import java.util.Scanner;

//class

public class Main {
    public static void main(String[] args) {

        Person person1 = new Person();
        person1.name = "Steve";
        person1.age = 20;
        person1.speak();

        System.out.println(person1.name);
        System.out.println(person1.age);
        Car car1 = new Car();
        car1.wipeWindShield();
    }
}
