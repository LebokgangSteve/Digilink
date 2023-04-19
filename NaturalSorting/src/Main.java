import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<String>();

        SortedSet<String> set = new TreeSet<String>();

        addElements(list);
        addElements(set);

        Collections.sort(list);

        showElements(list);
        System.out.println();
        showElements(set);
    }

    private static void addElements(Collection<String> col){
        col.add("Joe");
        col.add("Sue");
        col.add("Juliet");
        col.add("Clare");
        col.add("Mike");

    }
    public static void showElements(Collection<String> col){
        for (String element: col)
        {
            System.out.println(element);
        }
    }
}