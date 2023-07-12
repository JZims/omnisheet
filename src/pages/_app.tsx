import { type AppType, type AppProps } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider>
      <Component {...pageProps} />;
    </ClerkProvider>
    
  )
};

export default api.withTRPC(MyApp);
