package ionic.conference.app;
import android.os.Bundle;
import android.view.View;
import com.getcapacitor.BridgeActivity;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
      @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    getWindow().getDecorView().setSystemUiVisibility(
      View.SYSTEM_UI_FLAG_FULLSCREEN |
      View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
      View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
    );
  }
}
