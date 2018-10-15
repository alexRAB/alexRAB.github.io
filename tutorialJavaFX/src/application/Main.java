package application;
	


import com.sun.prism.paint.Color;

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Paint;
import javafx.scene.shape.Rectangle;
import javafx.scene.control.Button;


public class Main extends Application {
	
	private int degree = 0;
	@Override
	public void start(Stage primaryStage) {
		try {
  
	        BorderPane root = new BorderPane();
	        Scene scene = new Scene(root,500,500);
			javafx.scene.paint.Color foregorund = javafx.scene.paint.Color.rgb(255, 255, 255, 0.9);
	// rectangle
			
			Rectangle box = new Rectangle(320,200);
			box.setX(0);
			box.setY(0);
			box.setArcHeight(15);
			box.setArcWidth(15);
			box.setFill(javafx.scene.paint.Color.rgb(0, 0, 0, 0.55));
			box.setStroke(foregorund);
			box.setStrokeWidth(1.5);
			root.setCenter(box);
			
			Button btn = new Button("Rotate");
			btn.setOnAction(e -> {
				if (e.getSource() == btn) {
					degree = degree + 15;
					box.setRotate(degree);
				}
			});
			root.setBottom(btn);
			BorderPane.setMargin(btn, new Insets(0, 0, 20, 220));
			primaryStage.setScene(scene);
			primaryStage.show();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}
