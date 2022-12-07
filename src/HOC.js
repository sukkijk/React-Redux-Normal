export default function HOComponent(Component){
    return function(){
        return (
            <>
            <Component />
            </>
        )
    }
}