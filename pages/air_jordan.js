import AllProducts from "../components/all-product-box";
import Layout from "../components/Layout";
import styles from "../styles/allproduct.module.css";

export default function Jordan (){
    return (
        <Layout>
            <div className={`${styles["shoe-category"]}`}> 
                <h2 className={`${styles["h2-name"]}`}>Air Jordan</h2> 
                <hr className={`${styles["hr-nadpis"]}`} /> 
                <div className={`${styles["shoe-category-description"]}`}> 
                <h3>
                    Air Jordan jsou sportovní boty vyráběné firmou Nike inspirované
                    basketbalistou Michaelem Jordanem. Jsou známé pro svou inovativní
                    technologii a vynikající pohodlí a jsou oblíbené mezi sportovci i
                    lidmi, kteří hledají stylové boty. Jsou také populární mezi sběrateli
                    a jsou limitované, což znamená, že se velmi rychle vyprodávají a
                    některé vzácné verze jsou velmi drahé. Jsou vyráběny v mnoha modelech
                    a barvách a jsou k dispozici po celém světě.
                </h3>
                </div>
                <hr className={`${styles["hr-description"]}`} /> 
            </div>
            <AllProducts />
            <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
            }
          `}</style>
        </Layout>
    )
}