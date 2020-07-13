import '../styles.css'
import { Provider } from 'react-redux';
import configureStore from "../redux/store"

const store = configureStore();

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}