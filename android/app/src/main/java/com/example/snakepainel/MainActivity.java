package com.example.snakepainel;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Se precisar registrar plugins adicionais, faça aqui:
        // this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>(){{
        //     add(MyPlugin.class);
        // }});
    }
}
