import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const TradingViewWidget = () => {
  const widgetHtml = `
      <html>
        <head>
          <style>
            body { margin: 0; }
          </style>
        </head>
        <body>
          <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js" async>
            {
              "width": 550,
              "height": 400,
              "currencies": [
                "EUR",
                "USD",
                "JPY",
                "GBP",
                "CHF",
                "AUD",
                "CAD",
                "NZD"
              ],
              "isTransparent": false,
              "colorTheme": "dark",
              "locale": "en"
            }
            </script>
          </div
        </body>
      </html>
    `;

  return (
    <View style={styles.container}>
      <WebView source={{ html: widgetHtml }} style={styles.webView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    width: Platform.OS === "ios" ? 500 : 300,
  },
  webView: {
    flex: 1,
    height: 500,
    width: 580,
  },
});

export default TradingViewWidget;
