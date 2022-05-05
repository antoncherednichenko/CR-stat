import { FC, useEffect } from "react";
import Layout from "../../components/global/layout/Layout";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks";

const Home: FC = () => {
    return (
        <>
            <Layout>
                <div>
                    Hello
                </div>
            </Layout>
        </>
    )
}

export default Home