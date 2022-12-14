import { useSelector } from "react-redux";
import ChartSkeleton from "../layouts/ChartSKeleton";
import ChartGold from "./ChartGold";
import MiniCard from "./MiniCard";

export default function ThreeMonthChart({loading}){
    const data = useSelector(state => state.gold_price.threeMonth);
    
    return (
        <section id="one_week_chart">
            <h1 className="text-2xl sm:text-3xl font-bold mt-8 mx-4 mb-4 text-gray-800">3 Bulan Terakhir</h1>
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
                        title="Laba 3 Bulan (USD)"
                        data={`$${data.ch}`}
                        indicator={data.ch >= 0 ? 1 : -1}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Laba 3 Bulan (%)"
                        data={`${data.chp}%`}
                        indicator={data.ch >= 0 ? 1 : -1}
                        />
                    </div>
                    <ChartGold
                    title="Harga 3 Bulan Terakhir (Kg)"
                    data={data}
                    />
                </div>
            }
        </section>
    )
}