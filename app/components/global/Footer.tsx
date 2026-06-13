

export default function footer() {
    return (
        <footer className="bg-(--bkg-component) border-t border-(--bkg-border) py-8">
            <div className="container mx-auto px-6">
                <p className="text-zinc-400 text-center">
                    &copy; {new Date().getFullYear()} RAWR. All rights reserved.
                </p>
            </div>
        </footer>
    );
}