import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

var style = {

}


export default class Like extends React.Component{

    isChecked = () => {
        //compare user and likes;
        var Event = new Parse.Query( 'Event' );
        var { event, user } = this.props;
        // event.relation('likes').query().find().then(
        //     (users)=>{console.log(users,user)},
        //     (users)=>console.err
        // )

        return false
    }

    likeAction=(value)=>{
        var { event, user } = this.props;
        if(value){
            event.relation('likes').add(user);
            event.save();

            user.relation('likes').add(event);
            user.save()
        } else {
            event.relation('likes').remove(user);
            event.save();

            user.relation('likes').remove(event);
            user.save()
        }

    }

    render = ()=>{
        return(
            <Checkbox
                checked={ this.isChecked() }
                onCheck={ this.likeAction }
                checkedIcon={ <ActionFavorite/> }
                uncheckedIcon={ <ActionFavoriteBorder/> }
            />
        )
    }
}



