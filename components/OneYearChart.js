import { useSelector } from "react-redux";
import ChartSkeleton from "../layouts/ChartSKeleton";
import ChartGold from "./ChartGold";
import MiniCard from "./MiniCard";

export default function OneYearChart({loading}){
    const data = useSelector(state => state.gold_price.oneYear);
    
    return (
        <section id="one_week_chart">
            <h1 className="text-2xl sm:text-3xl font-bold mt-8 mx-4 mb-4 text-gray-800">1 Tahun Terakhir</h1>
            {loading ?
                <ChartSkeleton /> :
                <div>
                    <div className="flex flex-wrap gap-6 my-6 px-4">
                        <MiniCard 
                        loading={loading}
                        title="Harga Terendah"
                        data={`$${data.low_price}`}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Harga Tertinggi"
                        data={`$${data.high_price}`}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Laba 1 Tahun (USD)"
                        data={`$${data.ch}`}
                        indicator={data.ch >= 0 ? 1 : -1}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Laba 1 Tahun (%)"
                        data={`${data.chp}%`}
                        indicator={data.ch >= 0 ? 1 : -1}
                        />
                    </div>
                    <ChartGold
                    title="Harga 1 Tahun Terakhir"
                    data={data}
                    />
                </div>
            }
        </section>
    )
}