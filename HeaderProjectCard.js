const HeaderProjectCard = ({project}) => {
    return (
        //Write HTML code in here
        <div className='flex items-center rounded-sm bg-red-600 shadow-lg'>
            <div className='px-6 py-4'>
                <h3 className='text-lg font-semibold text-white'>{project.name}</h3>
            </div>
            
        </div>
    );
    
};

export default HeaderProjectCard;