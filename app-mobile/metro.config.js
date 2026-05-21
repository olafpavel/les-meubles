const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

const WEB_MOCKS = {
  "react-native-maps": "src/mocks/react-native-maps.web.tsx",
  "@opentelemetry/api": "src/mocks/opentelemetry-api.web.ts",
};

config.resolver = config.resolver || {};
const originalResolve = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === "web" && WEB_MOCKS[moduleName]) {
    return {
      filePath: path.resolve(__dirname, WEB_MOCKS[moduleName]),
      type: "sourceFile",
    };
  }
  if (originalResolve) return originalResolve(context, moduleName, platform);
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: "./src/global.css" });
