class FriendsList {
  friends = [];

  addFriend(newFriend) {
    this.friends.push(newFriend);
    this.announceFriendship(newFriend);
  }

  announceFriendship(newFriend) {
    console.log(`${newFriend} is now a friend`);
  }

  removeFriend(friend) {
    const index = this.friends.indexOf(friend);
    if (index === -1) {
      throw new Error('Friend does not exist');
    }
    this.friends.splice(index, 1);
  }
}

describe.skip('FriendsList tests', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('should initialize friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('should add a friend to friends list', () => {
    friendsList.addFriend('Oussama');
    expect(friendsList.friends.length).toEqual(1);
    expect(friendsList.friends).toEqual(['Oussama']);
  });

  it('should announce friendship', () => {
    friendsList.announceFriendship = jest.fn();
    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Oussama');
    expect(friendsList.announceFriendship).toHaveBeenCalled();
    expect(friendsList.announceFriendship).toHaveBeenCalledTimes(1);
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('Oussama');
  });

  describe('Remove friend', () => {
    it('should remove a friend', () => {
      friendsList.addFriend('Oussama');
      expect(friendsList.friends[0]).toEqual('Oussama');
      friendsList.removeFriend('Oussama');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('should throw an error if a friend does not exist', () => {
      expect(() => friendsList.removeFriend('foo')).toThrowError(
        'Friend does not exist',
      );
    });
  });
});
