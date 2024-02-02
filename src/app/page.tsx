import styles from "./page.module.scss";

export default async function Home() {
    return (
        <main className={styles.main}>
            <h1>NextJs Static Demo</h1>
            <div>This is a static website made with NextJs and GitHub Pages</div>
            <div>Go to <a href="./inner">Inner</a> page</div>
        </main>
    );
}
