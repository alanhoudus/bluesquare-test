export default function Footer() {
    return (
        <footer className="bg-gray-200 w-full">
            <div className="container mx-auto py-8 px-4">
                <div className="border-t border-gray-300 mt-8 pt-4 text-center">
                    <p className="text-sm text-gray-700">
                        © {new Date().getFullYear()} BST. Test technique.
                    </p>
                </div>
            </div>
        </footer>
    );

}