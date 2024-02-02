import styles from "./page.module.scss";

export default async function Home() {
    return (
        <main className={styles.main}>
            <h1>Inner page!</h1>
            <div>This is a static inner page</div>
        </main>
    );
}
