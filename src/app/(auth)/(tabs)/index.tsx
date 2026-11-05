
import { Text, View } from "react-native";
import {Link} from "expo-router";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-sucess">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2 text-white">
        go to onboarsding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary px-4 py-2 text-white">
        go to Sign in
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary px-4 py-2 text-white">
        go to Sign up
      </Link>
      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary px-4 py-2 text-white">
        Spotify Subscription
      </Link>
      <Link href={{
        pathname: '/subscriptions/[id]',
        params: { id: 'claude' },
      }}
    > 
       Claude Max Subscription
    </Link>
    </View>
  );
}