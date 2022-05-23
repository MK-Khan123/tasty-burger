import React from 'react';
import Delivery from '../../Shared/Delivery/Delivery';
import Navbar from '../../Shared/Navbar/Navbar';
import './TermsAndPrivacy.css';
import Footer from '../../Shared/Footer/Footer';
import { Box, Container } from '@mui/material';

const TermsAndPrivacy = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/terms-and-privacy/terms-page_jucdxr.jpg';

    return (
        <section id='terms-and-privacy'>
            <header>
                <Container>
                    <Navbar />
                </Container>
            </header>

            <main>
                <Box sx={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '26rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white', fontWeight: '500' }} component='h5'>TERMS AND PRIVACY</Box>
                </Box>
                <Container>
                    <section id='terms-and-privacy-document'>
                        <p>Donec sodales, nibh vel (the <span style={{ fontWeight: 'bold', color: 'black' }}>“Terms”</span>) tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Aliquet lorem purus, quis mollis nisi laoreet at vitae. Mauris consequat tortor. Duis fermentum a massa in convallis ultrices interdum.</p>
                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur undo dapibus libero. Quisque eu tristique neque blandit tristique justo aliquam. Aliquam molestie nunc sapien justo, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor justo suscipit in magna dignissim</p>
                        <div>
                            <h5>PROCESSING OF YOUR DATA</h5>
                            <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor</p>
                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales</p>
                            <p><span style={{ fontWeight: 'bold', color: 'black' }}>Email address</span> euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget</p>
                            <p><span style={{ fontWeight: 'bold', color: 'black' }}>Payment Data</span> euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget</p>
                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales</p>
                        </div>
                        <div>
                            <h5>COLLECTION OF INFORMATION</h5>
                            <p>Hliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales</p>
                        </div>
                        <div>
                            <h5>AUTHORIZE USER ACCOUNTS AND ACCOUNT SECURITY</h5>
                            <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor liqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales</p>
                        </div>
                        <div>
                            <h5>PROHIBITED CONDUCT AND CONTENT</h5>
                            <p>Quaerat sodales sapien undo euismod purus blandit velna euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget</p>
                            <p>Nemo ipsam egestas volute turpis dolores euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget</p>
                        </div>
                        <div>
                            <h5>YOUR RESPONSIBLITIES</h5>
                            <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor liqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales</p>
                        </div>
                        <div>
                            <h5>OTHER TERMS</h5>
                            <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor</p>
                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales</p>
                            <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor</p>
                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales</p>
                        </div>
                    </section>
                </Container>

                <Delivery />
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default TermsAndPrivacy;