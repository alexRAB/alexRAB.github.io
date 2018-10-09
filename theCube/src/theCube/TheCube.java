package theCube;

import javax.swing.JFrame;
import java.awt.Toolkit;

public class TheCube extends JFrame{

	static JFrame F = new TheCube();
	Screen ScreenObject = new Screen();
	public TheCube() {
		add(ScreenObject);
		setUndecorated(true);
		setSize(Toolkit.getDefaultToolkit().getScreenSize());
		setVisible(true);
	}
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
