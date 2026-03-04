import React from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  ShoppingBag, 
  MapPin, 
  Gift, 
  Percent, 
  Heart, 
  MoreHorizontal,
  CreditCard
} from 'lucide-react';
import '../styles/PhoneMockup.css';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="mockup-wrapper">
      
      {/* --- Left Floating Card (Spending) --- */}
      <div className="floating-card shadow-brand card-left animate-fade-in-up">
        <div className="card-header">
          <div className="badge-brand">$20.00</div>
          <div className="text-meta">Today</div>
        </div>
        
        {/* Progress Bar Simulation */}
        <div className="progress-container">
            <div className="progress-bar"></div>
        </div>
        <div className="card-stats">
            <span>$200</span>
            <span className="text-highlight">$258</span>
        </div>

        {/* Skeleton items */}
        <div className="card-row">
            <div className="icon-box">
                <CreditCard size={20}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <div className="skeleton-line w-20"></div>
                <div className="skeleton-line w-12"></div>
            </div>
        </div>
        
        <div className="rating-pill">
            <div className="rating-content">
                <span style={{fontWeight: 'bold'}}>5.0</span>
                <div style={{display: 'flex', color: '#facc15', fontSize: '0.75rem', gap: '2px'}}>
                    {'★★★★★'.split('').map((s,i)=><span key={i}>{s}</span>)}
                </div>
            </div>
            <span style={{fontSize: '0.75rem', opacity: 0.8}}>(+20)</span>
        </div>
      </div>


      {/* --- Right Floating Card (Search/Wishlist) --- */}
      <div className="floating-card shadow-brand card-right animate-fade-in-up">
        <div className="search-mock">
             <Search size={16} className="text-gray-400"/>
             <span className="text-meta">Search</span>
        </div>
        
        <div className="wishlist-header">
            <div className="flex" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <div className="heart-icon-wrapper">
                    <Heart size={16} fill="currentColor"/>
                </div>
                <span style={{fontWeight: 'bold', color: '#1f2937'}}>100/1100</span>
            </div>
            <div className="gift-icon-wrapper">
                <Gift size={12} />
            </div>
        </div>

        <div className="text-meta" style={{marginBottom: '0.5rem'}}>Adidas</div>
        <div className="product-grid">
             {[1,2,3,4].map((i) => (
                 <div key={i} className="product-thumb">
                    <img src={`https://picsum.photos/seed/shoe${i}/50/50`} className="product-img" alt="shoe" />
                 </div>
             ))}
        </div>
        
        <div className="cart-row">
             <div className="user-avatar">
                 <div style={{width: '1rem', height: '1rem', backgroundColor: '#3b82f6', borderRadius: '999px', opacity: 0.2}}></div>
             </div>
             <div className="cart-bar">
                <ShoppingBag size={12} className="text-green-600" />
                <div className="skeleton-line" style={{width: '3rem', backgroundColor: '#bbf7d0'}}></div>
             </div>
        </div>
      </div>


      {/* --- Central Phone Mockup --- */}
      <div className="phone-frame">
        {/* Notch */}
        <div className="notch"></div>
        
        {/* App Content */}
        <div className="app-screen no-scrollbar">
            
            {/* Header */}
            <div className="app-header">
                <div>
                   <p className="app-heading-label">Your credit limit</p>
                   <h2 className="app-heading-value">$231.00</h2>
                </div>
                <div className="app-actions">
                    <button className="icon-btn">
                        <Bell size={20} />
                    </button>
                    <button className="icon-btn">
                        <Settings size={20} />
                    </button>
                </div>
            </div>

            {/* Main Search */}
            <div className="app-search">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="app-search-input"
                />
                <Search className="app-search-icon" size={20} />
            </div>

            {/* Quick Actions Grid */}
            <div className="quick-actions-card">
                <div className="actions-grid">
                    <div className="action-item">
                        <div className="action-icon bg-brand-100 text-brand-600">
                            <ShoppingBag size={24} fill="currentColor" style={{opacity: 0.8}}/>
                        </div>
                        <span className="action-label">Shop</span>
                    </div>
                    <div className="action-item">
                        <div className="action-icon bg-orange-100 text-orange-600">
                            <MapPin size={24} fill="currentColor" style={{opacity: 0.8}}/>
                        </div>
                        <span className="action-label">In-Store</span>
                    </div>
                    <div className="action-item">
                        <div className="action-icon bg-green-100 text-green-600">
                            <Gift size={24} fill="currentColor" style={{opacity: 0.8}}/>
                        </div>
                        <span className="action-label">Rewards</span>
                    </div>
                    <div className="action-item">
                        <div className="action-icon bg-rose-100 text-rose-600">
                            <Percent size={24} fill="currentColor" style={{opacity: 0.8}}/>
                        </div>
                        <span className="action-label">Deals</span>
                    </div>
                </div>
                
                {/* Dots indicator */}
                <div className="dots-indicator">
                    <div className="dot dot-sm"></div>
                    <div className="dot dot-active"></div>
                    <div className="dot dot-sm"></div>
                </div>
            </div>

            {/* Top Brands Section */}
            <div className="brands-header">
                <h3 className="brands-title">Top Brand</h3>
                <span className="brands-link">See All</span>
            </div>

            <div className="brand-list">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="brand-item">
                        <div className="brand-logo">
                            <img src={`https://picsum.photos/seed/brand${item}/100/100`} alt="Brand" />
                        </div>
                        <div style={{flex: 1}}>
                            <div className="skeleton-line" style={{width: '6rem', marginBottom: '0.5rem'}}></div>
                            <div className="skeleton-line" style={{width: '4rem', backgroundColor: '#f9fafb'}}></div>
                        </div>
                        <button className="brand-more">
                            <MoreHorizontal size={16} />
                        </button>
                    </div>
                ))}
            </div>

        </div>

        {/* Bottom Bar Indicator */}
        <div className="home-indicator"></div>
      </div>
    </div>
  );
};
