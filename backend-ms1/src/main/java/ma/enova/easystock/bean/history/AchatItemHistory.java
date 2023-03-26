package ma.enova.easystock.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.enova.easystock.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "achat_item")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="achat_item_seq",sequenceName="achat_item_seq",allocationSize=1, initialValue = 1)
public class AchatItemHistory extends HistBusinessObject  {


    public AchatItemHistory() {
    super();
    }

    public AchatItemHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="achat_item_seq")
    public Long getId() {
    return id;
    }
}

