function Listing(props) {

    function bytesToSize(bytes) {
        const size = parseInt(bytes);
        const sizes = ['B', 'KB', 'MB'];
        if (size == 0) return '-';
        const i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
        return `${Math.round(size / Math.pow(1024, i, 2))} ${sizes[i]}`;
    }

    function readableDate(datetime) {
        const date = new Date(datetime * 1000);
        return `${date.getUTCDate()}-${date.getUTCMonth()+1}-${date.getUTCFullYear()} @ ${date.getUTCHours()}:${date.getUTCMinutes()}`
    }

    return (
        <div className="py-3 border-b-2 border-gray-200 flex space-x-6 items-center">
            <div className="font-medium">Icon</div>
            <div className="font-medium flex-grow">{props.name}</div>
            <div className="hidden sm:flex -space-x-2 items-center">
                <img src="https://picsum.photos/50" className="border-2 border-grey-100 rounded-full bg-gray-300 block overflow-hidden" alt="Contributor 1" width="28" height="28" alt="Account name"/>
                <img src="https://picsum.photos/50" className="border-2 border-grey-100 rounded-full bg-gray-300 block overflow-hidden" alt="Contributor 2" width="28" height="28" alt="Account name"/>
                <img src="https://picsum.photos/50" className="border-2 border-grey-100 rounded-full bg-gray-300 block overflow-hidden" alt="Contributor 3" width="28" height="28" alt="Account name"/>
            </div>
            <div className="hidden sm:block font-medium w-48">{readableDate(props.datetime)}</div>
            <div className="hidden sm:block font-medium w-24">{bytesToSize(props.size)}</div>
        </div>
    )
}

export default Listing;