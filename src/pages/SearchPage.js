import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import './SearchPage.css';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
    const [{term}]=useStateValue();

    const {data}=useGoogleSearch(term);


    console.log(term);
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <Link to="/">
                <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'></img>
            </Link>

            <div className='searchPage_headerBody'>
                <Search hidebuttons/>

                <div className='searchPage_options'>
                    <div className='searchPage_optionLeft'>
                        <div className='searchPage_option'>
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className='searchPage_option'>
                            <DescriptionIcon/>
                            <Link to="/all">News</Link>
                        </div>
                        <div className='searchPage_option'>
                            <ImageIcon/>
                            <Link to="/all">images</Link>
                        </div>
                        <div className='searchPage_option'>
                            <LocalOfferIcon/>
                            <Link to="/all">Shopping</Link>
                        </div>
                        <div className='searchPage_option'>
                            <RoomIcon/>
                            <Link to="/all">Maps</Link>
                        </div>
                        <div className='searchPage_option'>
                            <MoreVertIcon/>
                            <Link to="/all">More</Link>
                        </div>
                        <div className='searchPage_optionRight'>
                            <div className='searchPage_option'>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className='searchPage_option'>
                            <Link to="/tools">Tools</Link>
                        </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
{
    term && (
        <div className='searchPage__results'>
            <p className='searchPage__resultcount'>
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
            </p>
    {
        data?.items.map((item)=>
        <div className='searchPage__result'>
        <a href={item.displayLink} className='searchPage__resultLink'>
            
            
            {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                <img src={item.pagemap?.cse_image[0]?.src} className='searchPage__resultImage' alt='img'/>
            )}
            
            {item.displayLink}
        </a>

        <a href={item.link} className='searchPage__resultTitle'>
            <h2>{item.title}</h2>
            </a>
            <p className='searchPage__resultDescription'>{item.snippet}</p>
            </div>
            )}
            } 
        </div>
            )}
                </div>
  );
}

export default SearchPage