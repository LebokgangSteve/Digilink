import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

class DriverSelection {
    public static String[] vehicles = {"ambulance", "helicopter", "lifeboat"};
    public static String[][] drivers = {
            {"Fred", "Sue", "Pete"},
            {"Sue", "Richard", "Bob", "Fred"},
            {"Pete", "Mary", "Bob"},
    };
}

public class Main {
    public static void main(String[] args) {
        Map<String, Set<String>> personnel = new HashMap<String, Set<String>>();
        for (int i = 0; i < DriverSelection.vehicles.length; i++) {
            String vehicle = DriverSelection.vehicles[i];
            String[] driverlist = DriverSelection.drivers[i];
            System.out.println(vehicle + ":");


            Set<String> driverSet = new LinkedHashSet<String>();
            int index = 0;
            for (String driver : driverlist) {
                driverSet.add(driver);
                System.out.print(driver);

                if (index < driverlist.length - 1) {
                    System.out.print(",");
                }
                if (index == driverlist.length-1) {
                    System.out.print(".");
                }
                index++;
                //System.out.println(index);
            }

            System.out.print("\n");
            personnel.put(vehicle, driverSet);
        }


    }
}