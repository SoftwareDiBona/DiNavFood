package com.example.dinavfood;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private WebView myWebView;
    private WebSettings myWebSettings;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Oculto el action bar.
        getSupportActionBar().hide();

        //Cargo la pagina html.
        LoadPage();

    }

    private void LoadPage()
    {
        myWebView = findViewById(R.id.webView);
        myWebSettings = myWebView.getSettings();

        //Permito que se pueda usar Javacript.
        myWebSettings.setJavaScriptEnabled(true);
        myWebSettings.setDomStorageEnabled(true);

        //Permito que se puedan leer url locales.
        myWebSettings.setAllowFileAccessFromFileURLs(true);
        myWebSettings.setAllowUniversalAccessFromFileURLs(true);

        //Cargo mi html.
        myWebView.loadUrl("file:///android_asset/Pages/Cocina/cocina.html");
        myWebView.setWebViewClient(new WebViewClient());

        //Funciones de mi vista.
        myWebView.addJavascriptInterface(new MainActivityJavascript(this), "Android");

    }

    public class MainActivityJavascript
    {
        Context mContext;

        /** Instantiate the interface and set the context */
        MainActivityJavascript(Context c) {
            mContext = c;
        }

        /** Show a toast from the web page */

        //region @Metodos de MainActivity
        @JavascriptInterface
        public void performClick()
        {
            String stringVariable = "HOLA MUNDO";
            Toast.makeText (mContext, stringVariable, Toast.LENGTH_SHORT).show();
        }

        //endregion


        //region @Metodos de LoginActivity
        @JavascriptInterface
        public void performClick2()
        {
            String stringVariable = "HOLA LOGIN ACTIVITY";
            Toast.makeText (mContext, stringVariable, Toast.LENGTH_SHORT).show();
        }
        //endregion

    }


}

