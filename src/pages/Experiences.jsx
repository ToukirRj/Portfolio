import React from 'react'
import MainLayout from '../layout/MainLayout'
import Bio from '../components/Bio'


function Experiences(){
  return (
    <>
        <MainLayout>
            <div className="pt-10">
                <div className="bg-white/50">
                    <Bio/>
                </div>
            </div>
        </MainLayout>
    </>
  )
}

export default Experiences