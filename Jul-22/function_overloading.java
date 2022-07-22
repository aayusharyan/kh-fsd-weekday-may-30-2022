// Online Compiler Link -> https://www.programiz.com/java-programming/online-compiler/
// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class HelloWorld {
    public static void main(String[] args) {
        // System.out.println("Hello, World!"); 
        fn1("ABCD", 100);
    }
    
    //Function overloading
    public static void fn1(String str) {
        //Do something
        System.out.println("This is function 1");
    }
    
    public static void fn1(String str, int n) {
        //Do something
        System.out.println("This is function 2");
    }
}