exports.BlockHeader = class BlockHeader {
    constructor(_version, _previousBlockHeader, _merkleRoot, _timestamp) {
        this.version = version; // Version - at the time of writing there are 4 block versions. Version 1 is the genesis block (2009), Version 2 was a soft fork in Bitcoin Core 0.7.0 (2012). Version 3 blocks were a soft fork in Bitcoin Core 0.10.0 (2015). Version 4 blocks are BIP65 in Bitcoin Core 0.11.2 (2015).
        this.previousBlockHeader = _previousBlockHeader; // previous block header hash - A SHA256(SHA256()) hash of previous block’s header. Ensures that previous block cannot be changed as this block needs to be changed as well.
        this.merkleRoot = _merkleRoot; // merkle root hash - a merkle tree is a binary tree which holds all the hashed pairs of the tree.
        this.timestamp = _timestamp; // a Unix epoch time when the miner started hashing the header.
    }
};

exports.Block = class Block {
    constructor(_blockHeader, _index, _txns) {
        this.blockHeader = _blockHeader;
        this.index = _index; // GenesisBlock is the first block - block 0
        this.txns = _txns; // txns is the raw transaction in the block.
    }
}