import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-medium font-serif text-lg tracking-widest">BAEMONT</h3>
                        <p className="text-gray-400">Luxury diamond jewelry crafted for life's most precious moments.</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Press</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
                            Collections
                        </h4>
                        <ul className="space-y-3">
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Rings</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Necklaces</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Earrings</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping</Link></li>
                        </ul>
                    </div>                    
                </div>
            </div>

            <div className="border-t border-gray-800 px-6 md:px-8 py-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">© 2025 Baemont. All rights reserved.</p>
                    <div className="flex gap-6">
                        <p className="text-sm text-gray-500">Privacy Policy</p>
                        <p className="text-sm text-gray-500">Terms of Service</p>
                    </div>
                </div>
            </div>



        </footer>
    )
}

export default Footer