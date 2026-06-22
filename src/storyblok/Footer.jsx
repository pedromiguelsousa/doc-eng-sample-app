import FooterEntry from "./FooterEntry.jsx";
import FooterSubmenu from "./FooterSubmenu.jsx";

export default function Footer({ config: configData }) {

    const footerEntries = configData?.story?.content?.footer_items || [];

    return (
        <>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200" />
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-unset md:grid-flow-col auto-cols-fr gap-x-5 mb-4 mt-4 mx-4">
                {footerEntries.map((item) => {
                    if (item.items?.length > 0) {
                        return <FooterSubmenu key={item._uid} blok={item} topLevelNav={true} />;
                    } else {
                        return <FooterEntry key={item._uid} blok={item} topLevelNav={true} />;
                    }
                })}
            </div>
        </>
    )
}